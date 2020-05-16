const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

const cardLoaded = document.querySelector('.card-loaded')
const cardLoading = document.querySelector('.card-loading')
const newsDate = document.querySelector('#news-time')
const newsTitle = document.querySelector('#news-title')
const newsSnippet = document.querySelector('#news-snippet')
const newsLink = document.querySelector('#news-link')
const newsImg = document.querySelector('#news-img')

async function setArticle() {
  const pageRes = await axios.get(`${PROXY_URL}https://reason.com/latest/`)
  const parser = new DOMParser()
  const doc = parser.parseFromString(pageRes.data, 'text/html')

  const firstPost = doc.querySelector('.rcom-list-content--article.published')
  const anchorTag = firstPost.querySelector('a')
  const linkUrl = anchorTag.getAttribute('href')
  newsLink.setAttribute('href', linkUrl)
  const title = anchorTag.getAttribute('title')
  newsTitle.innerText = title
  const date = firstPost.querySelector('.updated').innerHTML
  newsDate.innerText = date
  const snippet = firstPost.querySelector('.entry-subtitle').innerHTML
  newsSnippet.innerText = snippet
  const imgUrl = firstPost.querySelector('img').getAttribute('data-lazy-srcset').split(' ')[0]
  newsImg.setAttribute('src', imgUrl)

  cardLoaded.style.display = 'flex'
  cardLoading.style.display = 'none'
}

setArticle()