import { useInView } from "react-intersection-observer";

const InViewWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return <div ref={ref}>{children(inView)}</div>;
};

export default InViewWrapper;
