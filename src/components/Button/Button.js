import './Button.css';

function Button({
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  forwardedRef,
  children,
}) {
  return (
    <button
      ref={forwardedRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
