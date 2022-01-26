<img src={poster ? img_300 / poster : unavailable}></img>

<MovieList
                key={content.id}
                id={content.id}
                poster={content.poster_path}
                tittle={content.tittle || content.name}
                date={content.first_air_date || content.release_date}
                media_type={content.media_type}
                vote_average={content.vote_average}
              />