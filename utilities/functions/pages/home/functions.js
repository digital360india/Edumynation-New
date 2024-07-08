/* React Multi-Carousel */

export function getCarouselResponsive({
  desktopBreakpoint = { max: 3000, min: 1024 },
  desktopSlidesToSlide = 1,
  desktopItems = 3,
  tabletBreakpoint = { max: 1024, min: 640 },
  tabletSlidesToSlide = 1,
  tabletItems = 2,
  mobileBreakpoint = { max: 640, min: 0 },
  mobileSlidesToSlide = 1,
  mobileItems = 1
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