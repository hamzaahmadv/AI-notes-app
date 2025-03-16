"use client"

import * as React from "react"
import { CalendarIcon, ChevronDown, Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Sample data for notes
const notes = [
  {
    id: 1,
    title: "Meeting notes",
    content: "Discussed project timeline and deliverables...",
    date: new Date(2023, 2, 14),
    category: "Work",
  },
  {
    id: 2,
    title: "Shopping list",
    content: "Milk, eggs, bread, fruits...",
    date: new Date(2023, 2, 12),
    category: "Personal",
  },
  {
    id: 3,
    title: "Book recommendations",
    content: "1. Atomic Habits\n2. Deep Work\n3. The Psychology of Money",
    date: new Date(2023, 2, 10),
    category: "Reading",
  },
  {
    id: 4,
    title: "Project ideas",
    content: "- Mobile app for habit tracking\n- Personal finance dashboard\n- Recipe collection tool",
    date: new Date(2023, 2, 8),
    category: "Work",
  },
  {
    id: 5,
    title: "Vacation planning",
    content: "Research destinations:\n- Japan\n- Italy\n- Norway",
    date: new Date(2023, 2, 5),
    category: "Personal",
  },
]

export default function Notes() {
  const [selectedNote, setSelectedNote] = React.useState(notes[0])
  const [noteContent, setNoteContent] = React.useState(selectedNote.content)
  const [noteTitle, setNoteTitle] = React.useState(selectedNote.title)

  React.useEffect(() => {
    setNoteContent(selectedNote.content)
    setNoteTitle(selectedNote.title)
  }, [selectedNote])

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <NotesSidebar notes={notes} selectedNote={selectedNote} onSelectNote={setSelectedNote} />
        <SidebarInset>
          <NoteEditor
            title={noteTitle}
            content={noteContent}
            onTitleChange={setNoteTitle}
            onContentChange={setNoteContent}
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

function NotesSidebar({
  notes,
  selectedNote,
  onSelectNote,
}: {
  notes: any[]
  selectedNote: any
  onSelectNote: (note: any) => void
}) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Notes</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search notes</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">New note</span>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <Input placeholder="Search notes..." className="h-8" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-2 py-2">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-medium text-muted-foreground">Recent Notes</h3>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
              Date
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
          <div className="mt-2 space-y-1">
            {notes.map((note) => (
              <div
                key={note.id}
                className={`group flex cursor-pointer flex-col gap-1 rounded-md px-3 py-2 text-sm ${
                  selectedNote.id === note.id ? "bg-primary/10" : "hover:bg-muted"
                }`}
                onClick={() => onSelectNote(note)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{note.title}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="line-clamp-1">{note.content.substring(0, 30)}...</span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    {format(note.date, "MMM d")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Free Plan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function NoteEditor({
  title,
  content,
  onTitleChange,
  onContentChange,
}: {
  title: string
  content: string
  onTitleChange: (title: string) => void
  onContentChange: (content: string) => void
}) {
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-xl font-semibold">Editor</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Share
          </Button>
          <Button size="sm">Save</Button>
        </div>
      </header>
      <div className="flex flex-1 flex-col overflow-auto p-6">
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="mb-4 border-none bg-transparent text-3xl font-bold outline-none placeholder:text-muted-foreground/50 focus:outline-none"
          placeholder="Note title"
        />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            className="h-full w-full resize-none border-none bg-transparent outline-none placeholder:text-muted-foreground/50 focus:outline-none"
            placeholder="Start writing your note here..."
          />
        </div>
      </div>
    </div>
  )
}

