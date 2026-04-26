import { useEffect, useState } from 'react'
import Pill from './Pill'
import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const totalImages = project.images.length

  const openPreview = (index = 0) => {
    setActiveImageIndex(index)
    setIsPreviewOpen(true)
  }
  const closePreview = () => setIsPreviewOpen(false)
  const showPrev = () =>
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  const showNext = () =>
    setActiveImageIndex((prev) => (prev + 1) % totalImages)

  useEffect(() => {
    if (!isPreviewOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
      } else if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
      } else if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % totalImages)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isPreviewOpen, totalImages])

  return (
    <>
      <article className="card-dark group overflow-hidden p-6 hover:-translate-y-1">
        <button
          type="button"
          onClick={() => openPreview(0)}
          className="mb-5 block w-full overflow-hidden rounded-xl border border-slate-800"
          aria-label={`Preview screenshots for ${project.title}`}
        >
          <img
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </button>

        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-slate-300">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-400"
          >
            GitHub
          </a>

          <button
            type="button"
            onClick={() => openPreview(0)}
            className="transition hover:text-blue-400"
          >
            Screenshots ({totalImages})
          </button>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </article>

      {isPreviewOpen ? (
        <ImageLightbox
          title={project.title}
          images={project.images}
          activeIndex={activeImageIndex}
          onClose={closePreview}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  )
}

type LightboxProps = {
  title: string
  images: string[]
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function ImageLightbox({
  title,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl rounded-xl border border-slate-800 bg-slate-900 p-4 md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            {title} — {activeIndex + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <img
          src={images[activeIndex]}
          alt={`${title} preview ${activeIndex + 1}`}
          className="max-h-[70vh] w-full rounded-lg object-contain"
        />

        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
