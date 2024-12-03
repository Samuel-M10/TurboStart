import "./Component3Variant1HoverFalse.css";

export const Component3Variant1HoverFalse = ({
  text = "+444 555 666 777",
  variant = "1",
  hover = "true",
  className,
  ...props
}) => {
  const variantsClassName = "variant-" + variant + " hover-" + hover;

  return (
    <div
      className={
        "component-3-variant-1-hover-false " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text">{text} </div>
    </div>
  );
};
