import "./App.css";
import Card from "./components/Card/Card";
import images from "./../src/constant/thumbnail.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { ImageOverlay } from "./components/ImageOverlay/ImageOverlay";
function App() {
  const [showOverlay, setShowOVerlay] = useState(false);
  const [overlayImg, setOverlayImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [cardsData, setCardsData] = useState([]);

  //persist the reordering logic
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    const updatedCards = Array.from(cardsData);
    //remove dragged card from its actual position and add it to destination
    const [draggedCard] = updatedCards.splice(source.index, 1);
    updatedCards.splice(destination.index, 0, draggedCard);
    localStorage.setItem("netix", JSON.stringify(updatedCards));
    setCardsData(updatedCards);
  };

  // api to get Data

  const getData = () => {
    fetch("/api/data", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setCardsData(res);
        localStorage.setItem("netix", JSON.stringify(res));
        setIsLoading(false);
      });
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setShowOVerlay(false);
        setOverlayImg("");
      }
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);



  // api call to post Data 

  const saveData = () => {
    setIsLoading(true);
    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardsData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const saveInterval = setInterval(() => {
      saveData();
    }, 5000);

    return () => {
      clearInterval(saveInterval);
    };
  }, [cardsData]);

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="card-list">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-list"
            >
              {cardsData.map((each, _idx) => (
                <Draggable key={each.type} draggableId={each.type} index={_idx}>
                  {(provided) => (
                    <div
                      className={"each-card"}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Card
                        title={each.title}
                        img={images[_idx].img}
                        type={each.type}
                        _id={_idx}
                        handleOverlay={(img) => {
                          setOverlayImg(img);
                          setShowOVerlay(true);
                        }}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {showOverlay && overlayImg && <ImageOverlay img={overlayImg} />}
    </>
  );
}

export default App;
