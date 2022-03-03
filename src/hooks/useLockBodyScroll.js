import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useLockBodyScroll = (isOpen) => {
  useIsomorphicLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalMobileStyle = window.getComputedStyle(
      document.body,
    ).touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = originalMobileStyle;
    };
  }, [isOpen]);
};

export default useLockBodyScroll;
