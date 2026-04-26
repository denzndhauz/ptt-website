
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AboutSection: typeof import("../components/AboutSection.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppLogo: typeof import("../components/AppLogo.vue")['default']
export const ContactSection: typeof import("../components/ContactSection.vue")['default']
export const FloatingChat: typeof import("../components/FloatingChat.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const LaptopTradeSection: typeof import("../components/LaptopTradeSection.vue")['default']
export const ReviewsSection: typeof import("../components/ReviewsSection.vue")['default']
export const ServicesSection: typeof import("../components/ServicesSection.vue")['default']
export const StatsSection: typeof import("../components/StatsSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.2_vite@7.3.2_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.32_typescript@6.0.2_/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutSection: LazyComponent<typeof import("../components/AboutSection.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppLogo: LazyComponent<typeof import("../components/AppLogo.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/ContactSection.vue")['default']>
export const LazyFloatingChat: LazyComponent<typeof import("../components/FloatingChat.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyLaptopTradeSection: LazyComponent<typeof import("../components/LaptopTradeSection.vue")['default']>
export const LazyReviewsSection: LazyComponent<typeof import("../components/ReviewsSection.vue")['default']>
export const LazyServicesSection: LazyComponent<typeof import("../components/ServicesSection.vue")['default']>
export const LazyStatsSection: LazyComponent<typeof import("../components/StatsSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.2_vite@7.3.2_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.32_typescript@6.0.2_/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.9.2_@emnapi+runtime@1.9.2_@parcel+watcher@2.5.6_@vue+compile_741438729a15f4a641e5a4727fd41a80/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
