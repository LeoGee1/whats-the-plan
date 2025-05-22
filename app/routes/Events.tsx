import MainLayout from "~/layout/MainLayout";

export default function Events() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-auto">
      <MainLayout>
        <div className="text-xl font-bold">here are your events</div>
      </MainLayout>
    </main>

  );
}