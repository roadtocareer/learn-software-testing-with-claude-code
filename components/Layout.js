import { useEffect } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'

export default function Layout({ title = 'Software Testing with AI', children }) {
  // Card fade-in animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.card').forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  // Copy-to-clipboard buttons injected into .code-block and accordion pre>code
  useEffect(() => {
    function copyCode(btn) {
      const wrapper = btn.closest('.code-block-wrapper')
      const pre = wrapper?.querySelector('pre')
      const text = pre ? pre.innerText : wrapper?.innerText ?? ''
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!'
        btn.style.color = '#00ff88'
        setTimeout(() => {
          btn.textContent = 'Copy'
          btn.style.color = ''
        }, 2000)
      })
    }

    // Inject into .accordion-body pre code blocks
    document.querySelectorAll('.accordion-body pre, .accordion-body .code-block').forEach(block => {
      if (block.closest('.code-block-wrapper')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'code-block-wrapper'
      block.parentNode.insertBefore(wrapper, block)
      wrapper.appendChild(block)
      const btn = document.createElement('button')
      btn.className = 'btn btn-sm btn-outline-info copy-btn'
      btn.textContent = 'Copy'
      btn.addEventListener('click', () => copyCode(btn))
      wrapper.appendChild(btn)
    })
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Sidebar />

      <div className="main-content">
        {children}
      </div>

      <footer className="text-center py-5 mt-5">
        <div className="container">
          <p>© 2026 Road to Career.</p>
          <p style={{ fontSize: '0.9rem' }}>Build reliable, intelligent testing systems with Claude AI</p>
        </div>
      </footer>
    </>
  )
}
