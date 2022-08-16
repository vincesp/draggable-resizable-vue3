// import NoProps from './NoProps.md'
// import WithBasicProps from './WithBasicProps.md'
// import WithMinMax from './WithMinMax.md'
// import WidthAuto from './WidthAuto.md'
// import ResizeImage from './ResizeImage.md'
// import ResizeImageAspectRatio from './ResizeImageAspectRatio.md'
// import NotDraggable from './NotDraggable.md'
// import NotResizable from './NotDraggable.md'

// export {
//   NoProps,
//   WithBasicProps,
//   WithMinMax,
//   WidthAuto,
//   ResizeImage,
//   ResizeImageAspectRatio,
//   NotDraggable,
//   NotResizable,
// }

export const aa = import.meta.env.glob('./*.md')

console.log(aa)
