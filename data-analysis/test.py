import pandas as pd

df = pd.DataFrame({
    "etudiants": ["David", "Marie", "Jean", "Thomas", "Marc"],
    "Maths": [15, 16, 14, 10, 18],
    "Anglais": [14, 17, 15, 19, 16],
    "Info": [11, 12, 15, 13, 16],
    "Physics": [14, 15, 17, 13, 15],
    "Francais": [17, 14, 13, 11, 16]
})

# Afficher les 5 premières lignes
print(df.head())

# Afficher uniquement les colonnes contenant les notes
print(df[["Maths", "Anglais", "Info", "Physics", "Francais"]])

# Vérifier quelles notes sont >= 10
print(df[["Maths", "Anglais", "Info", "Physics", "Francais"]] >= 10)

#Tri par ordre croissant
print(df.sort_values("Maths", ascending=False))

#Moyenne
notes = df[["Maths", "Anglais", "Info", "Physics", "Francais"]]
df["Moyenne"] = notes.mean(axis=1)
print(df[["etudiants", "Moyenne"]])

#Tri
print(df.sort_values("Moyenne", ascending=False))

#Moyene par matiere
moyenne_matiere = notes.mean(axis=0)
print(moyenne_matiere)

#Meilleur note par matiere
print(notes.max())

#Mauvais note par matiere
print(notes.min())

#Moyenne de chaque etudiant
print(df.groupby("etudiants")["Maths"].mean())
print(df.groupby("etudiants")["Anglais"].mean())
print(df.groupby("etudiants")["Info"].mean())
print(df.groupby("etudiants")["Physics"].mean())
print(df.groupby("etudiants")["Francais"].mean())

#Moyenne par matiere
print(notes["Maths"].mean())

print(notes["Anglais"].mean())

print(notes["Info"].mean())

print(notes["Physics"].mean())

print(notes["Francais"].mean())


#Aggregation
print(df.groupby("etudiants")["Maths"].agg(["min", "max", "mean"]))
print(df.groupby("etudiants")["Anglais"].agg(["min", "max", "mean"]))
print(df.groupby("etudiants")["Info"].agg(["min", "max", "mean"]))
print(df.groupby("etudiants")["Physics"].agg(["min", "max", "mean"]))
print(df.groupby("etudiants")["Francais"].agg(["min", "max", "mean"]))