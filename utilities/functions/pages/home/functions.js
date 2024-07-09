/* React Multi-Carousel */

export function getCarouselResponsive({
  
  // subtracting 1 from the breakpoints to match with tailwindcss breakpoints

  desktopBreakpoint = { max: 3000 - 1, min: 1024 - 1 },
  desktopSlidesToSlide = 1,
  desktopItems = 3,
  tabletBreakpoint = { max: 1024 - 1, min: 640 - 1 },
  tabletSlidesToSlide = 1,
  tabletItems = 2,
  mobileBreakpoint = { max: 640 - 1, min: 0 },
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