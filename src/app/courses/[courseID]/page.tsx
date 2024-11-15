'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ProgressBar';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useCourse } from '@/hooks/useCourse';

export default function CoursePage() {
  const { courseId } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { course, currentModule, progress, nextModule, prevModule, completeModule } = useCourse(courseId as string);

  useEffect(() => {
    if (!course) {
      setError(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [course]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#030812] to-[#0a1128] text-white">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="container mx-auto px-4 py-8 text-center bg-gradient-to-br from-[#030812] to-[#0a1128] text-white">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="text-gray-400 mb-8">The course you&apos;re looking for doesn&apos;t exist or there was an error loading it.</p>
        <Button onClick={() => router.push('/courses')} className="bg-cyan-500 text-black hover:bg-cyan-400 transition duration-200">
          Return to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-gradient-to-br from-[#030812] to-[#0a1128] text-white">
      <div className="space-y-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 text-cyan-300"
          >
            {course.title}
          </motion.h1>
          <p className="text-lg mb-4 text-gray-400">{course.description}</p>
          <ProgressBar progress={progress} className="bg-white" barClassName="bg-cyan-500" />
        </div>

        <Card className="mt-8 bg-[#1f1f1f] text-white">
          <CardHeader>
            <CardTitle>{currentModule?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentModule?.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="prose prose-zinc dark:prose-invert max-w-none text-white"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentModule?.content || '',
                  }}
                  className="mb-8"
                />
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8 gap-4">
          <Button
            variant="outline"
            onClick={prevModule}
            disabled={currentModule?.id === course.modules[0]?.id}
            className="flex-1 md:flex-none border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition duration-200"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={completeModule}
            className ="flex-1 md:flex-none bg-cyan-500 text-black hover:bg-cyan-400 transition duration-200"
          >
            {currentModule?.id === course.modules[course.modules.length - 1]?.id
              ? "Complete Course"
              : "Next Module"}
          </Button>
          <Button
            onClick={nextModule}
            disabled={currentModule?.id === course.modules[course.modules.length - 1]?.id}
            className="flex-1 md:flex-none border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition duration-200"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}