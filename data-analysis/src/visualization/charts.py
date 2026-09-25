import matplotlib.pyplot as plt

from ..data.loader import load_grades
from ..analysis.analysis import (
    calculate_average_by_student,
    calculate_average_by_subject,
    calculate_average_by_semester,
)


# =========================
# Moyenne par étudiant
# =========================

def plot_average_by_student(df):
    moyennes = calculate_average_by_student(df)

    etudiants = moyennes["last_name"]
    notes_moyennes = moyennes["grade"]

    plt.bar(etudiants, notes_moyennes)

    plt.title("Moyenne par étudiant")
    plt.xlabel("Étudiants")
    plt.ylabel("Moyenne")
    plt.xticks(rotation=45)
    plt.tight_layout()

    plt.savefig(
        "outputs/graphs/moyenne_etudiants.png"
    )

    plt.show()
    plt.close()


# =========================
# Moyenne par matière
# =========================

def plot_average_by_subject(df):
    moyennes = calculate_average_by_subject(df)

    matieres = moyennes["subject"]
    notes_moyennes = moyennes["grade"]

    plt.bar(matieres, notes_moyennes)

    plt.title("Moyenne par matière")
    plt.xlabel("Matières")
    plt.ylabel("Moyenne")
    plt.xticks(rotation=45)
    plt.tight_layout()

    plt.savefig(
        "outputs/graphs/moyenne_matieres.png"
    )

    plt.show()
    plt.close()


# =========================
# Distribution des notes
# =========================

def plot_grade_distribution(df):
    plt.hist(df["grade"])

    plt.title("Distribution des notes")
    plt.xlabel("Notes")
    plt.ylabel("Nombre de notes")
    plt.tight_layout()

    plt.savefig(
        "outputs/graphs/distribution_notes.png"
    )

    plt.show()
    plt.close()


# =========================
# Évolution par semestre
# =========================

def plot_average_by_semester(df):
    moyennes = calculate_average_by_semester(df)

    semestres = moyennes["semester"]
    notes_moyennes = moyennes["grade"]

    plt.plot(
        semestres,
        notes_moyennes,
        marker="o"
    )

    plt.title("Évolution de la moyenne par semestre")
    plt.xlabel("Semestres")
    plt.ylabel("Moyenne")
    plt.tight_layout()

    plt.savefig(
        "outputs/graphs/evolution_notes_semestres.png"
    )

    plt.show()
    plt.close()


# =========================
# Exécution du programme
# =========================

if __name__ == "__main__":

    df = load_grades()

    plot_average_by_student(df)
    plot_average_by_subject(df)
    plot_grade_distribution(df)
    plot_average_by_semester(df)