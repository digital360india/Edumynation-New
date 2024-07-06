/* React Multi-Carousel */

export function getCarouselResponsive({
  desktopItems = 3,
  desktopSlidesToSlide = 1,
  desktopBreakpoint = { max: 3000, min: 1024 },
  tabletItems = 2,
  tabletSlidesToSlide = 1,
  tabletBreakpoint = { max: 1024, min: 640 },
  mobileItems = 1,
  mobileSlidesToSlide = 1,
  mobileBreakpoint = { max: 640, min: 0 }
} = {}) {
  
  return {
    desktop: {
      breakpoint: desktopBreakpoint,
      items: desktopItems,
      slidesToSlide: desktopSlidesToSlide
    },
    tablet: {
      breakpoint: tabletBreakpoint,
      items: tabletItems,
      slidesToSlide: tabletSlidesToSlide
    },
    mobile: {
      breakpoint: mobileBreakpoint,
      items: mobileItems,
      slidesToSlide: mobileSlidesToSlide
    }
  };
}