// Plugin to fetch app info on app initialization and set SEO meta tags
export default defineNuxtPlugin(async (nuxtApp) => {
  const { fetchAppInfo, googleSeo, appInfo } = useAppInfo()

  // Fetch app info
  await fetchAppInfo()

  // Set SEO meta tags using useHead (works with SSR)
  if (appInfo.value?.prefix?.google_seo) {
    const seo = appInfo.value.prefix.google_seo

    useHead({
      title: seo.title || 'TBS Undersea Lobby',
      meta: [
        // Basic meta tags
        { name: 'description', content: seo.description || '' },
        { name: 'keywords', content: seo.keywords || '' },
        { name: 'robots', content: seo.robot_active ? 'index, follow' : 'noindex, nofollow' },
        
        // Open Graph meta tags
        { property: 'og:title', content: seo.og_title || seo.title || '' },
        { property: 'og:description', content: seo.og_description || seo.description || '' },
        { property: 'og:image', content: seo.og_image || '' },
        { property: 'og:url', content: seo.og_url || '' },
        { property: 'og:site_name', content: seo.og_site_name || '' },
        { property: 'og:type', content: 'website' },
        
        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.og_title || seo.title || '' },
        { name: 'twitter:description', content: seo.og_description || seo.description || '' },
        { name: 'twitter:image', content: seo.og_image || '' },
      ],
      link: [
        // Favicon
        ...(seo.image_x_icon ? [{ rel: 'icon', type: 'image/x-icon', href: seo.image_x_icon }] : [])
      ],
      script: [
        // Google Analytics
        ...(seo.google_tag ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${seo.google_tag}`,
            async: true,
          },
          {
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seo.google_tag}');
            `,
          }
        ] : []),
        // Google Tag Manager
        ...(seo.google_gtag ? [
          {
            innerHTML: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${seo.google_gtag}');
            `,
          }
        ] : []),
        // Custom script
        ...(seo.custom_script ? [{ innerHTML: seo.custom_script }] : [])
      ]
    })
  }
})

