import { useEffect } from 'react'

type SeoProps = {
  description: string
  ogDescription: string
  title: string
  url: string
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Loof',
  url: 'https://loofmarket.com/',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Loof',
  url: 'https://loofmarket.com/',
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = url
}

export function Seo({ description, ogDescription, title, url }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', ogDescription)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', 'Loof')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:url', url)
    setCanonical(url)

    let schema = document.head.querySelector<HTMLScriptElement>('#loof-structured-data')

    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'loof-structured-data'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }

    schema.textContent = JSON.stringify([organizationSchema, websiteSchema])
  }, [description, ogDescription, title, url])

  return null
}
