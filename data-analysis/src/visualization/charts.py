import matplotlib.pyplot as plt

from ..data.loader import load_grades

df = load_grades()

# Calcul de la moyenne par étudiant
moyennes = (
    df.groupby(
        ["id_student", "first_name", "last_name"]
    )["grade"]
    .mean()
    .reset_index()
)

# Données du graphique
etudiants = moyennes["last_name"]
notes_moyennes = moyennes["grade"]

# Diagramme en barres
"""plt.bar(etudiants, notes_moyennes)

plt.title("Moyenne par étudiant")
plt.xlabel("Étudiants")
plt.ylabel("Moyenne")

plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("data-analysis/outputs/graphs/moyenne_etudiants.png")
plt.show()"""

moyenne_matieres = (
    df.groupby(
    ["id_subject", "subject"]
    )["grade"]
    .mean()
    .reset_index()
)

moyennes = moyenne_matieres["grade"]
matieres = moyenne_matieres["subject"]

"""plt.bar(matieres, moyennes)
plt.title("Diagramme des moyennes par matieres")
plt.xlabel("matieres")
plt.ylabel("moyennes")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()"""

plt.hist(df["grade"])
plt.title("Distribution des notes")
plt.xlabel("Notes")
plt.ylabel("Nb notes")
plt.savefig("data-analysis/outputs/graphs/distribution_notes.png")
plt.show()

semester = (
    df.groupby(["id_semester", "semester"])["grade"]
      .mean()
      .reset_index()
)

semestres = semester["semester"]
moyennes = semester["grade"]

plt.plot(semestres, moyennes, marker="o")

plt.title("Evolution de la moyenne par semestre")
plt.xlabel("Semestres")
plt.ylabel("Moyenne")

plt.tight_layout()
plt.savefig("data-analysis/outputs/graphs/evolution_notes_semestres.png")

plt.show()