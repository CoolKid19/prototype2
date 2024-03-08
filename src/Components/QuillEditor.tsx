import Quill from 'quill';
import "quill-mention"
import { useCallback } from 'react';
const atValues = [
    { id: 1, value: "Fredrik Sundqvist" },
    { id: 2, value: "Patrik Sjölin" }
  ];
  const hashValues = [
    { id: 3, value: "Fredrik Sundqvist 2" },
    { id: 4, value: "Patrik Sjölin 2" }
  ];
  


  const QuillEditor = () => {
    const checkRef = useCallback((node : any) => {
        var quill = new Quill("#editor", {
            debug: "info",
            theme: "snow",
            modules: {
              mention: {
                toolbar:false,
                allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                mentionDenotationChars: ["@", "#"],
                source: function(searchTerm : any, renderList : any, mentionChar : any) {
                  let values;
          
                  if (mentionChar === "@") {
                    values = atValues;
                  } else {
                    values = hashValues;
                  }
          
                  if (searchTerm.length === 0) {
                    renderList(values, searchTerm);
                  } else {
                    const matches = [];
                    for (let i = 0; i < values.length; i++)
                      if (
                        ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
                      )
                        matches.push(values[i]);
                    renderList(matches, searchTerm);
                  }
                }
              }
            }
          });
          
          console.log(node)
        
    },[]);


  return (
    <div id="editor" ref={checkRef}></div>
  )
}

export default QuillEditor
