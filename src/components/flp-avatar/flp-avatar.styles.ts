import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
  ${componentStyles}

:host {
  display: inline-block;

  --size: 3rem;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--size);
  height: var(--size);
  background-color: var(--flp-color-neutral-400);
  font-family: var(--flp-font-light);
  font-size: calc(var(--size) * 0.5);
  font-weight: var(--flp-font-weight-normal);
  color: var(--flp-color-neutral-0);
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.avatar--circle,
.avatar--circle .avatar__image {
  border-radius: var(--flp-border-radius-circle);
}

.avatar--rounded,
.avatar--rounded .avatar__image {
  border-radius: var(--flp-border-radius-medium);
}

.avatar--square {
  border-radius: 0;
}

.avatar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.avatar__initials {
  line-height: 1;
  text-transform: uppercase;
}

.avatar__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}`;