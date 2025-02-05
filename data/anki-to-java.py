import csv
import re
import json
import os

# Percorso del file TSV nella cartella "dati"
tsv_file_path = "data/vetrini.tsv"
# Percorso di output per il file JS
output_file_path = "data.js"

# Regex per estrarre il contenuto dell'attributo src all'interno dei tag <img>
img_regex = re.compile(r'<img src="([^"]+)"')

data_objects = []

with open(tsv_file_path, newline='', encoding='utf-8') as tsvfile:
    reader = csv.reader(tsvfile, delimiter="\t")
    for row in reader:
        # Se la riga ha meno di 3 colonne, la saltiamo
        if len(row) < 3:
            continue

        # La prima colonna (ID) viene sempre trattata come stringa
        id_val = row[0].strip()

        # Estrae la seconda colonna: il nome
        name_val = row[1].strip()

        # Estrae la terza colonna: immagini
        images_field = row[2].strip()
        images_list = []
        #cerca quello tra <img src="" e " e lo mette in images_list
        for match in img_regex.finditer(images_field):
            images_list.append(match.group(1))
        
        # Le colonne successive vengono unite (se presenti) come additionalInfo
        additional_info = " ".join(col.strip() for col in row[3:] if col.strip())

        obj = {
            "id": id_val,
            "name": name_val,
            "images": images_list,
            "additionalInfo": additional_info
        }
        data_objects.append(obj)

# Genera la stringa in formato JavaScript, formattando l'array in JSON
js_data = "const data = " + json.dumps(data_objects, indent=2, ensure_ascii=False) + ";"

# Utilizziamo una regex per rimuovere le virgolette dalle chiavi
# La regex cerca pattern del tipo "chiave": e lo sostituisce con chiave:
js_data = re.sub(r'"([a-zA-Z_]\w*)":', r'\1:', js_data)

# Scrive il risultato nel file di output
with open(output_file_path, "w", encoding="utf-8") as outfile:
    outfile.write(js_data)

print(f"File '{output_file_path}' generato con successo.")
