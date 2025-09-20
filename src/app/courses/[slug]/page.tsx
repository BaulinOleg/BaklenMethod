import React from 'react'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {CourseItem} from '@/data/courses'
import {coursesData} from '@/data/courses'


interface PageParams {
  slug: string
}

function findCourseBySlug(slug: string): CourseItem | null {
  for (const category of coursesData) {
    for (const section of category.sections) {
      for (const item of section.items) {
        if (item.slug === slug) {
          return item
        }
      }
    }
  }
  return null
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs: PageParams[] = []

  coursesData.forEach((category) => {
    category.sections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.slug) {
          slugs.push({slug: item.slug})
        }
      })
    })
  })

  return slugs
}

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<PageParams>
  }): Promise<Metadata> {
  const resolvedParams = await params
  const course = findCourseBySlug(resolvedParams.slug)

  if (!course) {
    return {
      title: 'Курс не найден',
    }
  }

  return {
    title: course.title,
    description: Array.isArray(course.description)
      ? course.description[0]
      : course.description || '',
  }
}

export default async function CoursePage(
  {
    params,
  }: {
    params: Promise<PageParams>
  }) {
  const resolvedParams = await params
  const course = findCourseBySlug(resolvedParams.slug)

  if (!course) return notFound()

  return (
    <main className="course-page">
      <div className="container">
        <h1>{course.title}</h1>

        {course.description &&
          (Array.isArray(course.description)
            ? course.description.map((p, i) => <p key={i}>{p}</p>)
            : <p>{course.description}</p>)}

        {course.description2 && <p>{course.description2}</p>}

        {course.list && (
          <ul>
            {course.list.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </ul>
        )}

        <div>
          {course.previousPrice && <p>Старая цена: {course.previousPrice}</p>}
          {course.currentPrice && (
            <p>
              Текущая цена: {course.currentPrice}
              {course.currentPriceSuffix && <span>{course.currentPriceSuffix}</span>}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
