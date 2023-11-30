import { Suspense } from "react";
import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";
import CommentList from "@/components/comments/comment-list";
import CommentListLoading from "@/components/comments/comment-list-loading";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <Suspense fallback={<CommentListLoading />}>
        <CommentList postId={postId} />
      </Suspense>
    </div>
  );
}
