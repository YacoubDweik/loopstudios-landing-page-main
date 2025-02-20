function Card(props) {
  return (
    <a href="#" className="group relative">
      <span className="overlay absolute left-0 top-0 block h-full w-full bg-black/50 transition duration-200 group-hover:bg-blue-100 group-hover:opacity-80"></span>
      <picture className="block">
        <source media="(min-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/images/desktop/image-${props.name}.jpg`} />
        <img src={`${import.meta.env.BASE_URL}/images/mobile/image-${props.name}.jpg`} alt={props.alt} className="w-full" />
      </picture>
      <h3 className="absolute bottom-4 left-4 w-1/2 text-2xl uppercase text-white group-hover:text-black md:text-3xl">
        {props.title}
      </h3>
    </a>
  );
}

export default Card;
