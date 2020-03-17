import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.init()
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('Halaman utama', HomePagePreview)
CMS.registerPreviewTemplate('penawaran-solusi-synchronize-data-accurate-online', AboutPagePreview)
CMS.registerPreviewTemplate('penawaran-harga-pengintegrasian-data-accurate-online', PricingPagePreview)
CMS.registerPreviewTemplate('kontak-kami', ContactPagePreview)
CMS.registerPreviewTemplate('ulasan-tentang-kami', ArticlePreview)
