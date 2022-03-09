import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setIndexAction } from '../store/actions/mainActions';

const useOnScreen = (ref) => {
  // State and setter for storing whether element is visible
  const dispatch = useDispatch();

  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => (
        // Update our state when observer callback fires
        // entry?.isIntersecting &&
        // console.log(entry);
        //     console.log(entry.target.parentElement.previousElementSibling?.id);

        entry?.isIntersecting &&
          dispatch(
            setIndexAction({
              next: entry.target.parentElement.nextElementSibling?.id,
              prev: entry.target.parentElement.previousElementSibling?.id,
              current: entry.target.parentElement.id,
              index: entry.target.parentElement.attributes.dataIndex.value,
            }),
          )
      ),
      {
        root: null,
        threshold: 0.9,
        // rootMargin: '20px',
      },
    );
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      observer.unobserve(refCurrent);
    };
  }); // Empty array ensures that effect is only run on mount and unmount
};
export default useOnScreen;
