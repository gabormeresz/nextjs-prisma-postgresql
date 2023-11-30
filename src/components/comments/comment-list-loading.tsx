import { Skeleton } from "@nextui-org/react";

export default function CommentListLoading() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-32" />
    </div>
  );
}
