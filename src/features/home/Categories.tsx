import Link from "next/link";
import Image from "next/image";

interface CategoryItem {
  id: string;
  name: string;
  href: string;
  iconSrc: string;
}

export function Categories() {
  const categories: CategoryItem[] = [
    {
      id: "design",
      name: "Design",
      href: "/courses?category=design",
      iconSrc: "/icons/learningPaths/design.svg",
    },
    {
      id: "development",
      name: "Development",
      href: "/courses?category=development",
      iconSrc: "/icons/learningPaths/development.svg",
    },
    {
      id: "it-software",
      name: "IT & Software",
      href: "/courses?category=it",
      iconSrc: "/icons/learningPaths/software.svg",
    },
    {
      id: "business",
      name: "Business",
      href: "/courses?category=business",
      iconSrc: "/icons/learningPaths/business.svg",
    },
    {
      id: "marketing",
      name: "Marketing",
      href: "/courses?category=marketing",
      iconSrc: "/icons/learningPaths/marketing.svg",
    },
    {
      id: "photography",
      name: "Photography",
      href: "/courses?category=photography",
      iconSrc: "/icons/learningPaths/photography.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20">
      <div className="container">
        {/* ─── Section Header (Headline & Subtitle) ─── */}
        <div className="text-center mx-auto space-y-4">
          <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-236.75 mx-auto font-body text-body-m sm:text-body-l text-black-700 leading-relaxed px-2">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* ─── 6 Category Cards Grid ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12 sm:mt-14">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white border border-neutral-200/90 rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-center text-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-neutral-300"
            >
              {/* Lime Icon Circle */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center text-neutral-950 shadow-xs group-hover:scale-105 transition-transform">
                <Image
                  src={category.iconSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Category Name */}
              <span className="font-body text-label-m sm:text-label-xl text-neutral-950 group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
