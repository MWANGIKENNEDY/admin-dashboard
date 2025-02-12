import { barChartData, donutData, lineChartData, pieData } from "@/lib/utils";
import { LineChart,BarChart, DonutChart, PieChart } from '@mantine/charts';



export default function Home() {
  return (
    <div className=" p-4 flex flex-col gap-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">


      <article
  className="flex border-s-4 border-red-500 items-end justify-between rounded-lg bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
>
  <div className="flex items-center gap-4">
    <span
      className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block dark:bg-gray-800 dark:text-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Profit</p>

      <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>
    </div>
  </div>

  <div
    className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>
</article>


<article
  className="flex flex-col gap-4 rounded-lg border-s-4 border-cyan-500 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
>
  <div
    className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> Profit </strong>

    <p>
      <span className="text-2xl font-medium text-gray-900 dark:text-white"> $404.32 </span>

      <span className="text-xs text-gray-500 dark:text-gray-400"> from $240.94 </span>
    </p>
  </div>
</article>



<article className="flex border-s-4 border-red-500 items-end justify-between rounded-lg bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
  <div className="flex items-center gap-4">
    <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>

    <div>
      <p className="text-sm text-gray-500">Profit</p>

      <p className="text-2xl font-medium text-gray-900">$240.94</p>
    </div>
  </div>

  <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>
</article>
<article
  className="flex items-center gap-4 rounded-lg border-s-4 border-cyan-500 bg-white p-6 sm:justify-between dark:border-gray-800 dark:bg-gray-900"
>
  <span
    className="rounded-full bg-blue-100 p-3 text-blue-600 sm:order-last dark:bg-blue-500/20 dark:text-blue-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  </span>

  <div>
    <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>

    <p className="text-sm text-gray-500 dark:text-gray-400">Total Sales</p>
  </div>
</article>
      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className=" p-4 py-20 bg-white rounded-lg dark:bg-gray-900">

        <LineChart
      h={300}
      data={lineChartData}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      curveType="linear"
    />

        </div>
        <div className=" p-4 py-20 bg-white rounded-lg dark:bg-gray-900">

        <BarChart
      h={300}
      data={barChartData}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      tickLine="y"
    />

        </div>
      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className=" p-4 py-20 bg-white rounded-lg dark:bg-gray-900 flex items-center justify-center">

        <PieChart
      size={290}
      data={pieData}
      withLabelsLine labelsPosition="outside" labelsType="value" withLabels
    />

        </div>
        <div className=" p-4 py-20 bg-white rounded-lg dark:bg-gray-900 flex items-center justify-center">

        <DonutChart
     withLabelsLine labelsType="value" withLabels
      data={donutData}
   
      size={290} thickness={20}
    />

        </div>
      </div>

      <div className=" p-4 relative rounded-lg dark:bg-gray-900 overflow-hidden py-20 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 z-10 bg-black/20 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
      </div>
    </div>
  );
}