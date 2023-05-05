import './Skeleton.css';
import cls from 'classnames';

export type SkeletonType = 'text' | 'avatar';

export interface SkeletonProp {
  type?: SkeletonType;
}

export const Skeleton = ({ type = 'text' }: SkeletonProp) => (
  <div className={cls('skeleton', type)}></div>
);
