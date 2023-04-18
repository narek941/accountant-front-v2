import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { noop } from 'utils/index';

const NextLink = ({
  to,
  ref,
  target,
  onClick,
  children,
  disabled,
  queryKey,
  className,
  queryValue,
  anchorProps,
  activeClassName,
  ...linkProps
}) => {
  const { asPath, query } = useRouter();
  const anchorClasses = classNames(className, {
    [activeClassName]: query[queryKey]
      ? query[queryKey] === queryValue
      : asPath === to && activeClassName,
  });

  return asPath === to ? (
    <span className={anchorClasses}>{children}</span>
  ) : (
    <Link
      href={to}
      {...linkProps}
      ref={ref}
      role="button"
      target={target}
      className={anchorClasses}
      {...anchorProps}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

NextLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ref: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.any,
  target: PropTypes.string,
  className: PropTypes.any,
  queryValue: PropTypes.any,
  anchorProps: PropTypes.any,
  disabled: PropTypes.string,
  queryKey: PropTypes.string,
  activeClassName: PropTypes.string,
};

NextLink.defaultProps = {
  ref: {},
  target: '',
  to: undefined,
  onClick: noop(),
  children: [],
  disabled: undefined,
  queryKey: undefined,
  className: undefined,
  queryValue: undefined,
  anchorProps: {},
  activeClassName: undefined,
};

export default NextLink;
