import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  description: string;
  date: string;
  category: string;
  cover?: string;
};

const PostHeader = ({ title, description, date, category, cover }: Props) => {
  return (
    <>
      <div className="mx-auto">
        <h1 className="text-gray-900 text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">
          {title}
        </h1>
        <h2 className="text-gray-800 text-2xl leading-tight md:leading-none mb-4">
          {description}
        </h2>
        <div className="mb-6 text-lg flex">
          <div className="flex-1">
            <DateFormatter dateString={date} />
          </div>
        </div>
        {cover && <img src={cover} alt={title} className="w-full mb-8" />}
      </div>
    </>
  );
};

export default PostHeader;
