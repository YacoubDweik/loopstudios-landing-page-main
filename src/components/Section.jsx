import Card from "./Card";

function Section(props) {
  return (
    <>
      {props.name == "intro" && (
        <section className={`${props.name} relative min-h-screen overflow-hidden`}>
          <div className="z-1 container relative flex min-h-screen items-center justify-items-start text-white">
            <h1 className="sr-only">Loopstudios for VR</h1>
            <span className="block max-w-[275px] border-2 p-6 text-left text-3xl uppercase sm:text-4xl md:max-w-[500px] md:text-6xl">
              Immersive experiences that deliver
            </span>
          </div>
          <span className="overlay absolute left-0 top-0 z-0 block h-full w-full bg-black/50"></span>
        </section>
      )}
      {props.name == "about" && (
        <section className={`${props.name} container my-24`}>
          <div className="relative text-center md:flex md:items-center md:justify-between md:text-left">
            <picture className="block w-full md:shrink-0 xl:w-3/4">
              <source media="(min-width: 768px)" srcSet={import.meta.env.BASE_URL + "/images/desktop/image-interactive.jpg"} />
              <img src={import.meta.env.BASE_URL + "/images/mobile/image-interactive.jpg"} alt="A man who is trying VR" className="w-full" />
            </picture>
            <div className="la:max-w-[500px] bg-white py-8 md:absolute md:bottom-0 md:right-0 md:w-3/4 md:p-8 md:pr-0 xl:max-w-[750px] xl:p-24 xl:pr-0">
              <h2 className="mb-8 text-3xl uppercase xl:text-6xl">The leader in interactive VR</h2>
              <p className="font-paragraph font-light text-gray-400">
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                best companies around the globe. Our award-winning creations have transformed businesses through digital
                experiences that bind to their brand.
              </p>
            </div>
          </div>
        </section>
      )}
      {props.name == "creation" && (
        <section className={`${props.name} container my-24 text-left md:text-left`}>
          <div className="relative">
            <h2 className="mb-8 text-center text-4xl uppercase sm:text-left">Our creations</h2>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <Card name="deep-earth" alt="deep-earth project thumbnail" title="deep earth" />
              <Card name="night-arcade" alt="night arcade project thumbnail" title="night arcade" />
              <Card name="soccer-team" alt="soccer-team VR project thumbnail" title="soccer team VR" />
              <Card name="grid" alt="the grid project thumbnail" title="the grid" />
              <Card name="from-above" alt="from up above VR project thumbnail" title="from up above VR" />
              <Card name="pocket-borealis" alt="pocket-borealis project thumbnail" title="pocket borealis" />
              <Card name="curiosity" alt="the curiosity project thumbnail" title="the curiosity" />
              <Card name="fisheye" alt="make it fisheye project thumbnail" title="make it fisheye" />
            </div>
            <a
              href="#"
              className="mx-auto my-8 block w-fit border-2 px-12 py-2 text-2xl uppercase transition duration-200 hover:bg-black hover:text-white md:absolute md:right-0 md:top-0 md:m-0 md:py-1"
            >
              See all
            </a>
          </div>
        </section>
      )}
    </>
  );
}

export default Section;
