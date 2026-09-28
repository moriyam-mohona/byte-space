import Image from "next/image";

export function ImageGallerySection() {
  return (
    <section className="pt-10 bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        {/* Photo Gallery Grid ── */}
        {/* Mobile & Tablet View (< lg): 2-Column Responsive Collage Grid */}
        <div className="grid lg:hidden grid-cols-2 gap-2.5 sm:gap-4">
          {/* Top Panoramic Hero Banner (Beach running children) */}
          <div className="col-span-2 relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_beach.jpg"
              alt="Children running freely along the beach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Row 1: Tent camping & Healthcare */}
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_tent.jpg"
              alt="Community members gathered around tents during flood relief"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_health.jpg"
              alt="Free medical health camp for children in rural areas"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Row 2: Thumbs up girl & Tablet boy */}
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_girl_thumbs.jpg"
              alt="A young student giving a thumbs up in the learning center"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_tablet.jpg"
              alt="Child interacting happily with digital learning tablet"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Row 3: Classroom lesson & Smiling boy */}
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_chalkboard.jpg"
              alt="Classroom teacher leading interactive lesson for rescued kids"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_boy.jpg"
              alt="Smiling boy receiving warm winter clothing"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Row 4: Art activity & Superheroes */}
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_art.jpg"
              alt="Children participating in therapeutic creative art workshop"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="col-span-1 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_superheroes.jpg"
              alt="Kids enjoying superhero dress-up activity day"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Bottom Panoramic Banner (Meal distribution) */}
          <div className="col-span-2 relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
            <Image
              src="/images/about/about_meal.jpg"
              alt="Nutritious daily lunch distribution for underprivileged youth"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Desktop View (>= lg): Sophisticated 4-Column Mosaic Collage */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5">
          {/* Column 1: Vertical Stack (Tent Relief + Health Camp + Classroom Lesson) */}
          <div className="space-y-4 xl:space-y-5">
            <div className="relative h-44 xl:h-48 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_tent.jpg"
                alt="Community members gathered around tents during flood relief"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-48 xl:h-52 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_health.jpg"
                alt="Free medical health camp for children in rural areas"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-44 xl:h-48 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_chalkboard.jpg"
                alt="Classroom teacher leading interactive lesson for rescued kids"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: Center-Left Tall Hero Beach + Twin Portraits */}
          <div className="space-y-4 xl:space-y-5">
            <div className="relative h-92 xl:h-104 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_beach.jpg"
                alt="Children running freely along the beach"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3 xl:gap-4">
              <div className="relative h-44 xl:h-48 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
                <Image
                  src="/images/about/about_girl_thumbs.jpg"
                  alt="A young student giving a thumbs up in the learning center"
                  fill
                  sizes="(min-width: 1024px) 12.5vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative h-44 xl:h-48 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
                <Image
                  src="/images/about/about_tablet.jpg"
                  alt="Child interacting happily with digital learning tablet"
                  fill
                  sizes="(min-width: 1024px) 12.5vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Column 3: Center-Right Wide Meal Banner + Happy Boy Portrait */}
          <div className="space-y-4 xl:space-y-5">
            <div className="relative h-52 xl:h-58 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_meal.jpg"
                alt="Nutritious daily lunch distribution for underprivileged youth"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-84 xl:h-94 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_boy.jpg"
                alt="Smiling boy receiving warm winter clothing"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 4: Right Stack (Creative Art + Superhero Activity) */}
          <div className="space-y-4 xl:space-y-5">
            <div className="relative h-68 xl:h-76 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_art.jpg"
                alt="Children participating in therapeutic creative art workshop"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-68 xl:h-76 rounded-2xl overflow-hidden shadow-xs bg-surface-muted group">
              <Image
                src="/images/about/about_superheroes.jpg"
                alt="Kids enjoying superhero dress-up activity day"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
