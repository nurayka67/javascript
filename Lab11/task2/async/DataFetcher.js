export class DataFetcher {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async fetchUser(userId) {
    return this.client.get(`/users/${userId}`);
  }

  async fetchUserPosts(userId) {
    return this.client.get(`/users/${userId}/posts`);
  }

  async fetchUserWithDetails(userId) {
    try {
      const [user, posts] = await Promise.all([
        this.fetchUser(userId),
        this.fetchUserPosts(userId)
      ]);
      return { user, posts, fetchedAt: new Date().toISOString() };
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

  async fetchMultipleUsers(userIds) {
    const results = await Promise.allSettled(
      userIds.map(id => this.fetchUser(id))
    );
    
    const successful = results.filter(r => r.status === 'fulfilled').map(r => r.value);
    const failed = results.filter(r => r.status === 'rejected').map(r => ({ error: r.reason.message }));
    
    return { users: successful, failed, totalRequested: userIds.length, totalSuccessful: successful.length };
  }

  async fetchWithFallback(primaryUrl, fallbackUrls) {
    const urls = [primaryUrl, ...fallbackUrls];
    for (const url of urls) {
      try {
        const data = await this.client.get(url);
        return { data, source: url };
      } catch (e) {
        continue;
      }
    }
    throw new Error('All fetch attempts failed');
  }
}