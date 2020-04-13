/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.article = [];
    this.user = new Map();
    this.createuser = (id) => {
        this.user.has(id) ? '' : this.user.set(id, []);
    }
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.createuser(userId);
    this.article.unshift([userId, tweetId]);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    this.createuser(userId);
    let temp = this.user.get(userId),
        result = [];
    temp.push(userId);
    this.article.forEach((item) => {
        if(temp.includes(item[0])) result.push(item[1]);
    });
    if(result.length > 10) result = result.slice(0,10);
    return result;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.createuser(followerId);
    this.user.get(followerId).push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.createuser(followerId);
    let index = this.user.get(followerId).indexOf(followeeId);
    if (index !== -1) {
        this.user.get(followerId).splice(index, 1);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */