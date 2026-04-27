import './css/text.css';

const colorClassMap = {
  default: 'text--default',
  muted: 'text--muted',
  primary: 'text--primary',
  error: 'text--error',
  white: 'text--white',
};

export default function Text({ children, color = 'default', className = '', style, ...props }) {
  const colorClass = colorClassMap[color] ?? 'text--custom-color';
  const colorStyle = colorClassMap[color] ? style : { ...style, '--text-custom-color': color };
  const Component = props.as ?? 'span';
  const restProps = { ...props };
  delete restProps.as;

  return (
    <Component className={['text', colorClass, className].filter(Boolean).join(' ')} style={colorStyle} {...restProps}>
      {children}
    </Component>
  );
}
