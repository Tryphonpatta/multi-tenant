-- CreateTable
CREATE TABLE "courseUser" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "courseUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courseUser" ADD CONSTRAINT "courseUser_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseUser" ADD CONSTRAINT "courseUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
