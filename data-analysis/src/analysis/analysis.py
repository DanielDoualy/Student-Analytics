from ..data.loader import load_grades

df = load_grades()
#print(df)

#Nombre total de notes
print(df["grade"].count())

#Moyenne generale
print(df["grade"].mean())

#Note min
print(df["grade"].min())

#Note max
print(df["grade"].max())

#Moyenne par etudiant
print(df.groupby(
    ["id_student", "first_name", "last_name"]
)["grade"].mean())

#Meilleur moyenne etudiant
print(df.groupby(
    ["id_student", "first_name", "last_name"]
)["grade"].mean().max())

#Moyenne plus faible
print(df.groupby(
    ["id_student", "first_name", "last_name"]
)["grade"].mean().min())

#Nombre de note par etudiant
print(df.groupby(["id_student", "first_name", "last_name"])["grade"].count())


#Moyenne par matiere
print(df.groupby(
    ["id_subject", "subject"]
)["grade"].mean())

#Note maximale par matiere
print(df.groupby(
    ["id_subject", "subject"]
)["grade"].max())

#Note minimale par matiere
print(df.groupby(
    ["id_subject", "subject"]
)["grade"].min())

#Nombres de notes par matiere
print(df.groupby(
    ["id_subject", "subject"]
)["grade"].count())

#Moyenne par semestre
print(df.groupby(
    ["id_semester", "semester"]
)["grade"].mean())

#Note maximale par semestre
print(df.groupby(
    ["id_semester", "semester"]
)["grade"].max())

#Note minimale par semestre
print(df.groupby(
    ["id_semester", "semester"]
)["grade"].min())

#Nombre de notes par semestre
print(df.groupby(
    ["id_semester", "semester"]
)["grade"].count())

#Etudiant avec moy >= 14
moyenne_etudiants = df.groupby(
    ["id_student", "first_name", "last_name"]
)["grade"].mean()

top_etudiants = moyenne_etudiants[moyenne_etudiants > 14]
print(top_etudiants)


#Etudiant avec moy >= 14
bad_etudiants = moyenne_etudiants[moyenne_etudiants < 10]
print(bad_etudiants)