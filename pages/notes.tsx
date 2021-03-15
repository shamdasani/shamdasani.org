import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import Intro from "../components/intro";
import ReactMarkdownWithHtml from "react-markdown";
import Head from "next/head";

function Notes() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [saved, setSaved] = useState(0);

  useEffect(() => {
    let noteData = localStorage.getItem("note");
    let noteObject = noteData && JSON.parse(noteData);
    let savedData = localStorage.getItem("saved");
    let savedString = savedData && JSON.parse(savedData);
    setNote(noteObject);
    setSaved(savedString);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [note, saved]);

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);

    setNote({ ...note, [name]: value });
    setSaved(Date.now());
  };

  return (
    <Layout>
      <Head>
        <title>Notes | Samay Shamdasani</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Container>
        <Intro />
        <div className="notes">
          <p className="text-gray-600">
            Last saved at {saved && new Date(saved).toLocaleTimeString()}
          </p>
          <input
            name="title"
            value={note && note.title}
            placeholder="Title"
            onChange={handleInput}
            className="block w-full focus:outline-none text-2xl text-gray-900 tracking-tighter font-bold text-3xl"
          />

          <div className="flex w-full mt-2">
            <div className="flex flex-1 p-1">
              <textarea
                name="content"
                value={note && note.content}
                placeholder="New note..."
                onChange={handleInput}
                className="block focus:outline-none text-xl text-gray-800 w-full h-screen"
              ></textarea>
            </div>
            <div className="flex flex-1 line-break markdown p-1">
              <ReactMarkdownWithHtml
                className="w-full text-xl text-gray-900"
                children={note.content}
                allowDangerousHtml
              />

              {/* <ReactMarkdown
                className="w-full"
                children={note.content}
              ></ReactMarkdown> */}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Notes;

// Write in markdown, one click publish to let anyone access it!
