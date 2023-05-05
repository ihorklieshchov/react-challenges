import './SkeletonCard.css';
import { Skeleton } from './Skeleton';

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <section className="header">
      <div>
        <Skeleton type="avatar" />
      </div>
      <div className="title">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </section>
    <section className="content">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </section>
  </div>
);
