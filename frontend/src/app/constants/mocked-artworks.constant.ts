import { Artwork } from "../models/artwork.model";
import { PaginatedResponse } from "../models/common.model";



export const DUMMY_RESPONSE: PaginatedResponse<Artwork> = {
  "pagination": {
      "total": 126065,
      "limit": 10,
      "offset": 0,
      "total_pages": 12607,
      "current_page": 1,
      "next_url": "https://api.artic.edu/api/v1/artworks?page=2&limit=10"
  },
  "data": [
      {
          "id": 13527,
          "api_model": "artworks",
          "api_link": "https://api.artic.edu/api/v1/artworks/13527",
          "is_boosted": false,
          "title": "The Bath",
          "alt_titles": null,
          "thumbnail": {
              "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAAKCgc3yPl4yanb6yhqysmL+1qcy6h8e8j8e6lcq/oMm/stLBi9DGstPJuNLIutTKudXLutbMvNfPv9rQwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYFMoUIQMjQAYSUAsRzQxUAgAOw==",
              "width": 8537,
              "height": 11179,
              "alt_text": "A work made of color drypoint, aquatint and softground etching from two plates, printed à la poupée, on ivory laid paper."
          },
          "main_reference_number": "1932.1287",
          "has_not_been_viewed_much": false,
          "boost_rank": null,
          "date_start": 1890,
          "date_end": 1891,
          "date_display": "1890–91",
          "date_qualifier_title": "",
          "date_qualifier_id": null,
          "artist_display": "Mary Cassatt (American, 1844-1926)\nprinted with Leroy (French, active 1876-1900)",
          "place_of_origin": "United States",
          "description": null,
          "short_description": null,
          "dimensions": "Image/plate: 32.1 × 24.7 cm (12 11/16 × 9 3/4 in.); Sheet: 43.6 × 30 cm (17 3/16 × 11 13/16 in.)",
          "dimensions_detail": [],
          "medium_display": "Color drypoint, aquatint and softground etching from two plates, printed à la poupée, on ivory laid paper",
          "inscriptions": null,
          "credit_line": "Mr. and Mrs. Martin A. Ryerson Collection",
          "catalogue_display": "<p>Mathews & Shapiro 5 17/17</p><p>Breeskin 143 11/11</p>",
          "publication_history": null,
          "exhibition_history": null,
          "provenance_text": null,
          "edition": null,
          "publishing_verification_level": "Web Basic",
          "internal_department_id": 3,
          "fiscal_year": 1933,
          "fiscal_year_deaccession": null,
          "is_public_domain": true,
          "is_zoomable": true,
          "max_zoom_window_size": -1,
          "copyright_notice": null,
          "has_multimedia_resources": false,
          "has_educational_resources": false,
          "has_advanced_imaging": false,
          "colorfulness": 0,
          "color": {
              "h": 50,
              "l": 61,
              "s": 47,
              "percentage": 0.0010551670793152329,
              "population": 1007
          },
          "latitude": null,
          "longitude": null,
          "latlon": null,
          "is_on_view": false,
          "on_loan_display": "<p>On loan to Philadelphia Museum of Art in Philadelphia for <i>Mary Cassatt at Work</i></p>",
          "gallery_title": null,
          "gallery_id": null,
          "nomisma_id": null,
          "artwork_type_title": "Print",
          "artwork_type_id": 18,
          "department_title": "Prints and Drawings",
          "department_id": "PC-13",
          "artist_id": 33890,
          "artist_title": "Mary Cassatt",
          "alt_artist_ids": [],
          "artist_ids": [
              33890
          ],
          "artist_titles": [
              "Mary Cassatt"
          ],
          "category_ids": [
              "PC-13",
              "PC-825"
          ],
          "category_titles": [
              "Prints and Drawings",
              "Women artists"
          ],
          "term_titles": [
              "drypoint",
              "mothers",
              "paper (fiber product)",
              "print",
              "prints and drawing",
              "children"
          ],
          "style_id": null,
          "style_title": null,
          "alt_style_ids": [],
          "style_ids": [],
          "style_titles": ['Classic'],
          "classification_id": "TM-154",
          "classification_title": "drypoint",
          "alt_classification_ids": [
              "TM-17",
              "TM-4"
          ],
          "classification_ids": [
              "TM-154",
              "TM-17",
              "TM-4"
          ],
          "classification_titles": [
              "drypoint",
              "print",
              "prints and drawing"
          ],
          "subject_id": "TM-12350",
          "alt_subject_ids": [
              "TM-10118"
          ],
          "subject_ids": [
              "TM-12350",
              "TM-10118"
          ],
          "subject_titles": [
              "mothers",
              "children"
          ],
          "material_id": "TM-2982",
          "alt_material_ids": [],
          "material_ids": [
              "TM-2982"
          ],
          "material_titles": [
              "paper (fiber product)"
          ],
          "technique_id": null,
          "alt_technique_ids": [],
          "technique_ids": [],
          "technique_titles": [],
          "theme_titles": [
              "Women artists"
          ],
          "image_id": "907a7782-97d6-9cde-a8cb-1b9bea785ea1",
          "alt_image_ids": [],
          "document_ids": [],
          "sound_ids": [],
          "video_ids": [],
          "text_ids": [],
          "section_ids": [],
          "section_titles": [],
          "site_ids": [],
          "suggest_autocomplete_all": [
              {
                  "input": [
                      "1932.1287"
                  ],
                  "contexts": {
                      "groupings": [
                          "accession"
                      ]
                  }
              },
              {
                  "input": [
                      "The Bath"
                  ],
                  "contexts": {
                      "groupings": [
                          "title"
                      ]
                  }
              }
          ],
          "source_updated_at": "2024-08-08T00:30:17-05:00",
          "updated_at": "2024-08-08T00:35:46-05:00",
          "timestamp": "2024-08-08T05:40:22-05:00"
      },
      {
          "id": 23700,
          "api_model": "artworks",
          "api_link": "https://api.artic.edu/api/v1/artworks/23700",
          "is_boosted": true,
          "title": "The Praying Jew",
          "alt_titles": null,
          "thumbnail": {
              "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAACIjIi4vLTQxKjc2Mj87NDw7NkZCO1NPRlhWUWFgV2NhXGplW2xpXGxsZm9vaIJ6a4mKgZWRg5SRh6ennQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoDMQQCMtATJBjHI8USEYSQgAOw==",
              "width": 5731,
              "height": 7565,
              "alt_text": "Painting of man who is seated with his hands over his lap. He is dressed in prayer clothes, with a white shawl draped over his head and shoulders. His facial features and hands are slightly distorted, and the background is an abstract pattern of black and white."
          },
          "main_reference_number": "1937.188",
          "has_not_been_viewed_much": false,
          "boost_rank": null,
          "date_start": 1923,
          "date_end": 1923,
          "date_display": "1923 (one of two versions after a 1914 composition)",
          "date_qualifier_title": "",
          "date_qualifier_id": null,
          "artist_display": "Marc Chagall\nBorn Vitebsk (formerly Russian Empire, now Belarus), 1887; died Saint-Paul, France, 1985",
          "place_of_origin": "France",
          "description": "<p>Marc Chagall had a prolific career that spanned more than eight decades of the twentieth century. While his work often exhibits influences of the contemporary movements he encountered in France and Germany, his subjects and decorative lyricism reveal his love of Russian folk art and his roots in Hasidic Judaism.</p>\n<p>In his 1931 autobiography, <em>My Life</em>, Chagall related how, while visiting Vitebsk (present-day Belarus), the city in which he was born, he realized that the traditions in which he had grown up were fast disappearing and that he needed to document them. He paid a man to pose in his father’s prayer clothes and then painted him, limiting his palette primarily to black and white, as befit the solemnity of the subject. This portrait is noteworthy for the simplicity of its execution; nonetheless, its striking patterns, abstract background, and the slightly distorted features of the model demonstrate Chagall’s absorption of modern trends, especially Cubism.</p>\n<p>Chagall often painted variants or replicas of works he particularly loved. The Art Institute’s <em>Praying Jew</em> is one of three versions of this composition. He painted the original canvas in 1914, and when he traveled back to Paris in 1923, he took this painting with him. He learned upon his return that much of the work he had left in France had been lost during World War I. This prompted him to make two versions of <em>The Praying Jew</em> before it left his studio: they are the present work and another in the Ca’ Pesaro, Venice; the original is now in the Kunstmuseum, Basel. The later compositions differ from the original only in small details.</p>\n",
          "short_description": null,
          "dimensions": "116.8 × 89.4 cm (46 × 35 3/16 in.)",
          "dimensions_detail": [],
          "medium_display": "Oil on canvas",
          "inscriptions": "Signed, l.r.: \"MArc / ChAgAll\"",
          "credit_line": "Joseph Winterbotham Collection",
          "catalogue_display": null,
          "publication_history": "Bulletin de l’Effort Moderne 2 (February 1924), n.p. (ill.), as Le vieux rabbin, 1923.\n\nGeorge, Waldemar, Marc Chagall (Les Peintres Français Nouveaux, 31) (Paris: Gallimard, 1928), p. 43 (ill.), as Rabbin, 1914. \n\nCarl Einstein, Die Kunst des 20. Jahrhunderts, (Propyläen Verlag: Berlin, 1928) pp. 485 (ill.), 567.\n\nArt Digest VII:16 (May 15, 1933), p. 25 (ill.), as Rabbi, n.d.\n\nArt Institute of Chicago, A Century of Progress Exhibition of Paintings and Sculpture, exh. cat. (Chicago: Art Institute of Chicago, 1933), p. 80, cat. 725, pl. LXXIV, as Portrait of a Rabbi, n.d.\n\nDallas Museum of Fine Arts, The Centennial Exposition, exh. cat. (Dallas: Dallas Museum of Fine Arts, 1936), p. 42, cat. 21, as Portrait of a Rabbi, n.d.\n\nToledo Museum of Art, Contemporary Movements in European Painting, exh. cat. (Toledo, Ohio: Toledo Museum of Art, 1938), p. 16, cat. 13 (ill.), as Rabbi, 1914.\n\nThe Jewish Layman XVI:5 (January 1942), p. 8 (ill.), as Rabbi, n.d.\n\n“The Rabbi—Marc Chagall,” Daily News (July 11, 1942), p. 21 (ill.), as The Rabbi, n.d.\n\nMuseum of Modern Art, 20th Century Portraits, exh. cat. (New York: Museum of Modern Art, 1942), pp. 22, 64, and 135, as The Rabbi of Vitebsk, 1914.\n\nArts Club, Marc Chagall, exh. cat. (Chicago: Arts Club, 1945), n.p., cat. 28, as The Rabbi, n.d.\n\n“Marc Chagall,” Emporium CIV:623–624 (November–December 1946), p. 208 (ill.), as Rabbino, 1914.\n\nVenturi, Lionello, Marc Chagall (1945), cat. 10.    \n\nFrankfurter, Alfred M., “The Daring Chagall,” Art News XLV:3 (May 1946), p. 25 (ill.), as The Praying Jew (Rabbi of Vitebsk), 1914.\n\nSweeney, James Johnson, Marc Chagall, exh. cat. (New York: Museum of Modern Art, 1946), pp. 31, 34–35, 53, and 87, cat. 18 (ill.), as The Praying Jew (The Rabbi of Vitebsk), 1914.\n\nArt Institute of Chicago, The Winterbotham Collection, exh. cat.  (Chicago: Art Institute of Chicago, 1947), pp. 5 and 9–10 (ill.), as The Rabbi of Vitebsk, 1914.\n\nMusée National d'Art Moderne, Marc Chagall: Peintures 1908–1947, exh. cat. (Paris: Musée National d'Art Moderne, 1947), n.p., cat. 19, as Le Rabbin en Priere, n.d.\n\nMaritain, Raïssa, Chagall ou l’orage Enchanté (Geneva: Éditions des trios Collines, 1948), pp. 40 and 70 (ill.), as Le rabbin en prière, 1914–1923.\n\nArts Council of Great Britain, Marc Chagall, exh. cat. (London: Arts Council of Great Britain, 1948), p. 7, cat. 18, pl. VIII, as The Praying Jew, 1914.\n\nAyrton, Michael, Chagall (London, 1948), pp. 3–4, pl. 4.\n\n___, “The Art of Marc Chagall,” The Listener XXXIX:994 (February 12, 1948), p. 254 (cover ill.), as The Rabbi of Vitebsk, n.d.\n\nCincinnati Art Museum, Cincinnati Biennial Festival of the Arts, Paintings: 1900–1925, exh. cat. (Cincinnati, Ohio: Cincinnati Art Museum, 1951), n.p., cat. 7, as The Rabbi, 1914. \n\nMasterpieces in The Art Institute of Chicago (Chicago, The Art Institute of Chicago: 1952), n.p. (ill.), as The Praying Jew (The Rabbi of Vitebsk), n.d.\n\nBaltimore Museum of Art, Man and His Years, exh. cat. (Baltimore, Md.: Baltimore Museum of Art, 1954), pp. 31–32, cat. 69 (ill.), as The Rabbi of Vitebsk, 1914.\n\nArt Institute of Chicago, Paintings in the Art Institute of Chicago: A Catalogue of the Picture Collection (Chicago: Art Institute of Chicago, 1961), pp. 74 and 469 (ill.), as The Praying Jew (The Rabbi of Vitebsk), 1914.\n\nBrion, Marcel, Chagall (New York: Harry N. Abrams, 1961), pp. 34–35 and 83 (ill.), as The Jew at Prayer, 1914.\n\nBarry, Edward, “A Legacy that Grows—Winterbotham Collection,” The Chicago Tribune (August 25, 1963), p. F4.\n\nSpeyer, A. James, “Twentieth-Century European Paintings and Sculpture,” Apollo 84:55 (September 1966), p. 222, as Rabbi of Vitebsk, 1914.\n\nEl Mundo de los Museos, The Art Institute of Chicago (Madrid: Editorial Codex, S. A., 1967), pp. 13, 70 and 72, fig. 54.\n\nArnason, H. H.,  History of Modern Art (New York: Harry N. Abrams, 1968), p. 284, fig. 453, as The Praying Jew, 1914.\n\nMaxon, John, The Art Institute of Chicago (New York: Harry N. Abrams, 1970), p. 271 (ill), as The Praying Jew, 1914.\n\nKunstmuseum Bern, Sammlung im Obersteg, exh. cat. (Bern: Kunstmuseum Bern, 1975), n.p.\n\nDavies, Horton and Hugh Davies, Sacred Art in a Secular Society (Collegeville, Minn.: The Liturgical Press, 1978), pp. 21, pl. 6, 45, and 10, as The Praying Jew (The Rabbi of Vitebsk), 1914.\n\nArt Institute of Chicago, 100 Masterpieces (Chicago: Art Institute of Chicago, 1978), pp. 130–131 (ill.), as The Praying Jew (The Rabbi of Vitebsk), 1914.\n\nSpeyer, A. James and Courtney Graham Donnell, Twentieth Century European Painting (Chicago: University of Chicago Press, 1980), p. 36, no. 1D1.\n\nCompton, Susan, Chagall, exh. cat. (London: Royal Academy of Arts, 1985), p. 186.\n\nWood, James N. and Katharine C. Lee, Master Paintings in The Art Institute of Chicago (Chicago: The Art Institute of Chicago, 1988), p. 130 (ill.), as The Praying Jew (Rabbi of Vitebsk), 1923.\n\nBarbican Art Gallery, Chagall to Kitaj: Jewish Experience in 20th Century Art, exh. cat. (London: Barbican Art Gallery, 1990), pp. 25, fig. 17, and p. 26, as The Praying Jew, 1923.\n\nNiigata Prefectural Museum of Modern Art, Masterworks of Modern Art from The Art Institute of Chicago, exh. cat. (Nagaoka, Japan: Niigata Prefectural Museum of Modern Art, 1994), pp. 110–111, cat. 31 (ill.), as The Praying Jew, 1923 copy of a 1914 work.\n\nBaal-Teshuva, Jacob (editor), Chagall: A Retrospective (New York: Hugh Lauter Levin, 1995), pp. 134 (ill.), as The Praying Jew, 1923.\n\nDampérat, Marie-Hêlène, Sylvie Forestier, and Eric de Chassey, L’ABCdaire de Chagall (Paris: Flammarion, 1995), pp. 70–71 (ill.), as Le Rabbin de Vitebsk, 1923.\n\nBaal-Teshuva, Jacob, Marc Chagall 1887–1985 (Kologne: Taschen, 1998), pp. 113–114 (ill.), as Praying Jew, 1923.\n\nMarc Chagall: Ursprung und Wege, exh. cat. (Munich: Prestel, 1998), p. 214, as Der Jude in Schwarz-Weiß.\n\nVoyages & rencontres de Marc Chagall, 1923–1939, exh. cat. (Nice, France: Musée National Message Biblique Marc Chagall, 1998), pp. 42 and 74 (ill.), as Le Juif en noir et blanc.\n\nWood, James N. and Debra N. Mancoff, Treasures from The Art Institute of Chicago (Chicago: The Art Institute of Chicago, 2000), p. 247 (ill.), as The Praying Jew, 1923 copy of 1914 work.\n\nHarshav, Benjamin, Marc Chagall and the Lost Jewish World: The Nature of Chagall’s Art and Iconography (New York: Rizzoli, 2006), pp. 137 and 141, no. 81, as The Praying Jew, 1923.",
          "exhibition_history": "New York, Museum of Modern Art, Summer Exhibition: Paintings and Sculpture, June 7–October 30, 1932.\n\nChicago, Art Institute, A Century of Progress Exhibition of Paintings and Sculpture, June 1–November 1, 1933, p. 80, cat. 725, pl. LXXIV, as Portrait of a Rabbi, n.d.\n\nDallas Museum of Fine Arts, The Centennial Exposition, June 6–November 29, 1936, p. 42, cat. 21, as Portrait of a Rabbi, n.d.\n\nToledo Museum of Art, Contemporary Movements in European Painting, November 6–December 11, 1938, p. 16, cat. 13 (ill.), as Rabbi, 1914.\n\nNew York, Museum of Modern Art, 20th Century Portraits, December 9, 1942–January 24, 1943, pp. 22, 64, and 135, as The Rabbi of Vitebsk, 1914; traveled to the Baltimore Museum of Art, February 12–March 7, 1943, and the Worcester Art Museum, March 24–April 18, 1943. \n\nChicago, Arts Club, Marc Chagall, January 2–31, 1945, n.p., cat. 28, as The Rabbi, n.d.\n\nNew York, Museum of Modern Art, Marc Chagall, April 4–June 23, 1946, pp. 31, 34–35, 53, and 87, cat. 18 (ill.), as The Praying Jew (The Rabbi of Vitebsk), 1914; traveled to Chicago,  Art Institute, November 14, 1936–January 12, 1947.\n\nChicago, Art Institute, The Winterbotham Collection, May 23–June 22, 1947, pp. 5 and 9–10 (ill.), as the Rabbi of Vitebsk, 1914.\n\nParis, Musée National d'Art Moderne, Marc Chagall: Peintures 1908–1947, October 17–December 22, 1947, n.p., cat. 19, as Le Rabbin en Priere, n.d.; traveled to Amsterdam, Stedelijk Museum, December 8, 1947–January 12, 1948, p. 13, cat. 17, as De rabbijn in gebed, 1914. \n\nLondon, Arts Council of Great Britain, organiser, Marc Chagall, p. 7, cat. 18, pl. VIII, as The Praying Jew, 1914; traveled to London, Tate Gallery, February 4–29, 1948.\n\nDallas Museum of Fine Arts, The Winterbotham Collection of 20th Century European Paintings from the Art Institute of Chicago, October 8–November 5, 1949, no cat.\n\nCincinnati Art Museum, Cincinnati Biennial Festival of the Arts, Paintings: 1900–1925, February 2–March 4, 1951, n.p., cat. 7, as The Rabbi, 1914. \n\nBaltimore Museum of Art, Man and His Years, October 19–November 21, 1954, pp. 31–32, cat. 69 (ill.), as The Rabbi of Vitebsk, 1914.\n\nChicago, First National Bank, Chagall Window, September 12, 1972.\n\nLondon, Royal Academy of Arts, Chagall, 1985, hors. cat.; traveled to Philadelphia Museum of Art May 12–July 7, 1985 (Philadelphia only).\n\nNagaoka, Japan, Niigata Prefectural Museum of Modern Art, Masterworks of Modern Art from The Art Institute of Chicago, April 20–May 29, 1994, pp. 110–111, cat. 31 (ill.), as The Praying Jew, 1923 copy of a 1914 work; traveled to Nagoya, Aichi Prefectural Museum of Art, June 10–July 24, 1994; and Yokohama Museum of Art, August 6–September 25, 1994.\n\nNew York, The Jewish Museum, Russian Jewish Artists in a Century of Change, 1890-1990, September 21, 1995–January 28, 1996, pp. 158 and 248, fig. 17, as The Praying Jew (The Rabbi of Vitebsk), 1923.\n\nBerne, Museum of Fine Arts, Marc Chagall 1907–1917, 1995, hors. cat.; traveled to Los Angeles County Museum of Art, September 19, 1996–January 5, 1997 (Los Angeles only).\n\nFort Worth, Kimbell Art Museum, The Age of Picasso and Matisse: Modern Masters from the Art Institute of Chicago, Oct. 6, 2013–Feb. 16, 2014, no cat. no. ",
          "provenance_text": "Sold through Pierre Loeb (1897–1964), Paris, to Patrick M. Sweeney, New York, 1924 [letter from James Sweeney, Sept. 1, 1975, in curatorial file]; sold to the Art Institute of Chicago, 1937.",
          "edition": null,
          "publishing_verification_level": "Web Cataloged",
          "internal_department_id": 246,
          "fiscal_year": 1940,
          "fiscal_year_deaccession": null,
          "is_public_domain": false,
          "is_zoomable": true,
          "max_zoom_window_size": 1280,
          "copyright_notice": "© 2018 Artists Rights Society (ARS), New York / ADAGP, Paris",
          "has_multimedia_resources": false,
          "has_educational_resources": false,
          "has_advanced_imaging": false,
          "colorfulness": 15.493,
          "color": {
              "h": 51,
              "l": 50,
              "s": 7,
              "percentage": 0.05441860815268184,
              "population": 506
          },
          "latitude": null,
          "longitude": null,
          "latlon": null,
          "is_on_view": false,
          "on_loan_display": "<p>On loan to Musée National Marc Chagall for <i>Marc Chagall: The Cry of Freedom</i></p>",
          "gallery_title": null,
          "gallery_id": null,
          "nomisma_id": null,
          "artwork_type_title": "Painting",
          "artwork_type_id": 1,
          "department_title": "Modern Art",
          "department_id": "PC-11",
          "artist_id": 33909,
          "artist_title": "Marc Chagall",
          "alt_artist_ids": [],
          "artist_ids": [
              33909
          ],
          "artist_titles": [
              "Marc Chagall"
          ],
          "category_ids": [
              "PC-11"
          ],
          "category_titles": [
              "Modern Art"
          ],
          "term_titles": [
              "painting",
              "Century of Progress",
              "Modernism",
              "prayer shawls",
              "modern and contemporary art",
              "world's fairs",
              "Chicago World's Fairs",
              "beards",
              "praying",
              "religious attire",
              "religious figures",
              "religion",
              "Jewish people",
              "Judaism",
              "Joseph Winterbotham Collection"
          ],
          "style_id": "TM-5981",
          "style_title": "Modernism",
          "alt_style_ids": [],
          "style_ids": [
              "TM-5981"
          ],
          "style_titles": [
              "Modernism"
          ],
          "classification_id": "TM-9",
          "classification_title": "painting",
          "alt_classification_ids": [
              "TM-155"
          ],
          "classification_ids": [
              "TM-9",
              "TM-155"
          ],
          "classification_titles": [
              "painting",
              "modern and contemporary art"
          ],
          "subject_id": "TM-12169",
          "alt_subject_ids": [
              "TM-14273",
              "TM-11299",
              "TM-12176",
              "TM-12347",
              "TM-12734",
              "TM-12732",
              "TM-12554",
              "TM-11421",
              "TM-12731",
              "TM-12592",
              "TM-14413"
          ],
          "subject_ids": [
              "TM-12169",
              "TM-14273",
              "TM-11299",
              "TM-12176",
              "TM-12347",
              "TM-12734",
              "TM-12732",
              "TM-12554",
              "TM-11421",
              "TM-12731",
              "TM-12592",
              "TM-14413"
          ],
          "subject_titles": [
              "Century of Progress",
              "prayer shawls",
              "world's fairs",
              "Chicago World's Fairs",
              "beards",
              "praying",
              "religious attire",
              "religious figures",
              "religion",
              "Jewish people",
              "Judaism",
              "Joseph Winterbotham Collection"
          ],
          "material_id": null,
          "alt_material_ids": [],
          "material_ids": [],
          "material_titles": [],
          "technique_id": null,
          "alt_technique_ids": [],
          "technique_ids": [],
          "technique_titles": [],
          "theme_titles": [],
          "image_id": "0b5057af-97c6-5eb8-7328-fa9cf46d8751",
          "alt_image_ids": [],
          "document_ids": [],
          "sound_ids": [],
          "video_ids": [],
          "text_ids": [],
          "section_ids": [],
          "section_titles": [],
          "site_ids": [],
          "suggest_autocomplete_all": [
              {
                  "input": [
                      "1937.188"
                  ],
                  "contexts": {
                      "groupings": [
                          "accession"
                      ]
                  }
              },
              {
                  "input": [
                      "The Praying Jew"
                  ],
                  "contexts": {
                      "groupings": [
                          "title"
                      ]
                  }
              }
          ],
          "source_updated_at": "2024-08-08T00:30:17-05:00",
          "updated_at": "2024-08-08T00:35:45-05:00",
          "timestamp": "2024-08-08T05:40:22-05:00"
      },
  ],
  "info": {
      "license_text": "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
      "license_links": [
          "https://creativecommons.org/publicdomain/zero/1.0/",
          "https://www.artic.edu/terms"
      ],
      "version": "1.10"
  },
  "config": {
      "iiif_url": "https://www.artic.edu/iiif/2",
      "website_url": "http://www.artic.edu"
  }
}