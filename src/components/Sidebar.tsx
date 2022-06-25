import { useGetLessonsQuery } from "../generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className="w-[348px] invisible md:visible bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronogramas das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(({id, title,slug,availableAt,lessonType}) => {
          return (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
