import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'


export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
            <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                <div className="flex flex-col justify-center gap-12">
                  <h1 className="h1-bold gap-10 mt-16">Host, Celebrate and Connect: IPU College and Cultural Events!</h1>
                  <p className="p-regular-23 md:p-regular-20">Immerse yourself in Indraprashta University's vibrant event scene. Our event hub connects you to a diverse array of college and cultural society events. Expand your network and enrich your university life with ease.</p>
                  <Button size="lg" asChild className="button w-full sm:w-fit bg-blue-500 ">
                    <Link href="#events">Explore Now</Link>
                  </Button>
                </div>
                <Image 
                    src ="/assets/images/hero.png"
                    alt="hero"
                    width={800}
                    height={800}
                    className="max-h-[60vh] object-contain object-center 2xl:max-h-[50vh] gap-10"
                />
            </div>
        </section>
        <section id="events" className="wrapper my-12 flex flex-col flex-8 gap-8 md:gap-12">
          <h2 className="h2-bold mt-16">Trusted by <br /> Thousands of Students</h2>
          <div className="flex w-full  gap-5 md:flex-row">
            Search
            Category Filters
          </div>

          <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
        </section>
    </>
  );
}

