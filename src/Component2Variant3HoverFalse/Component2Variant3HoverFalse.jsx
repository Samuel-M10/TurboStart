import "./Component2Variant3HoverFalse.css";

export const Component2Variant3HoverFalse = ({
  text = "Gravity",
  variant = "1",
  hover = "true",
  className,
  ...props
}) => {
  const variantsClassName = "variant-" + variant + " hover-" + hover;

  return (
    <div
      className={
        "component-2-variant-3-hover-false " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text">{text} </div>
    </div>
  );
};
