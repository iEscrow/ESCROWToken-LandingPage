export default function CommentCard({ commentKey, authorKey, t }) {
  return (
    <div className="max-w-[720px] select-none">
      <p className="font-light text-text-secondary">{t(commentKey)}</p>
      <p className="text-sm mt-4 text-primary font-semibold">-{t(authorKey)}</p>
    </div>
  );
}
