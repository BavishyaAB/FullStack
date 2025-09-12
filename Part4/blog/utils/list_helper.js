const dummy = (blogs) => {
  return 1
}
const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}
const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null
  return blogs.reduce((prev, curr) => (curr.likes > prev.likes ? curr : prev))
}
const mostBlog = (blogs) => {
  if (blogs.length === 0) return null
  const authorLikes = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes
    return acc
  }, {})
  console.log('AuthorLikes',authorLikes)
  const mostLikedAuthor = Object.keys(authorLikes).reduce((prev, curr) =>
    authorLikes[curr] > authorLikes[prev] ? curr : prev
  )
  return {
    author: mostLikedAuthor,
    likes: authorLikes[mostLikedAuthor]
  }
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlog
}