"""
Script para remover o fundo da imagem do logo.
Execute: pip install rembg pillow
Depois: python remover-fundo.py
"""
try:
    from rembg import remove
    from PIL import Image

    img = Image.open("public/images/logo.png")
    out = remove(img)
    out.save("public/images/logo.png")
    print("Fundo removido! logo.png atualizado.")
except ImportError:
    print("Instale: pip install rembg pillow")
except Exception as e:
    print(f"Erro: {e}")
