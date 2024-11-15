import { useState, useEffect } from 'react'
import { Course } from '@/types'
import { courses } from '@/lib/data'

export function useCourse(courseId: string) {
  const [course, setCourse] = useState<Course | null>(null)
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [completedModules, setCompletedModules] = useState<string[]>([])
  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId)
    if (foundCourse) {
      setCourse(foundCourse)
    }
  }, [courseId])

  const currentModule = course ? course.modules[currentModuleIndex] : null
  const progress = course ? (completedModules.length / course.modules.length) * 100 : 0

  const nextModule = () => {
    if (course && currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex((prevIndex) => prevIndex - 1)
    }
  }

  const completeModule = () => {
    if (currentModule) {
      setCompletedModules((prevCompleted) => [...prevCompleted, currentModule.id])
      nextModule()
    }
  }

  return {
    course,
    currentModule,
    progress,
    nextModule,
    prevModule,
    completeModule,
  }
}